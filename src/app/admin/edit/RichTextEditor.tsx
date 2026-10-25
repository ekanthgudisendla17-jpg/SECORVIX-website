"use client";

import Image from "@tiptap/extension-image";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import { Color, TextStyle } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRef, useState, type ReactNode } from "react";
import { uploadImage } from "../api";

const colours = [
  { label: "Default colour", value: "" },
  { label: "Navy", value: "#021861" },
  { label: "Lavender", value: "#6d6de0" },
  { label: "Red", value: "#de1110" },
  { label: "Grey", value: "#6b7280" },
];

type Props = {
  initialHtml: string;
  onChange: (html: string) => void;
};

export default function RichTextEditor({ initialHtml, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        codeBlock: false,
        link: { openOnClick: false, autolink: true, defaultProtocol: "https" },
      }),
      TextStyle,
      Color,
      Image,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({ placeholder: "Start writing your article…" }),
    ],
    content: initialHtml,
    editorProps: {
      attributes: { class: "article-body min-h-[420px] px-5 py-4 outline-none sm:px-6" },
    },
    onUpdate: ({ editor }) => onChange(editor.isEmpty ? "" : editor.getHTML()),
  });

  return (
    // overflow-clip (not hidden) so the sticky toolbar sticks to the page, not this box
    <div className="overflow-clip rounded-xl border border-black/10 bg-white focus-within:border-navy/50">
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const s = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      block: e.isActive("heading", { level: 2 }) ? "h2" : e.isActive("heading", { level: 3 }) ? "h3" : e.isActive("heading", { level: 4 }) ? "h4" : "p",
      colour: (e.getAttributes("textStyle").color as string | undefined) ?? "",
      bold: e.isActive("bold"),
      italic: e.isActive("italic"),
      underline: e.isActive("underline"),
      strike: e.isActive("strike"),
      bullet: e.isActive("bulletList"),
      ordered: e.isActive("orderedList"),
      quote: e.isActive("blockquote"),
      link: e.isActive("link"),
      table: e.isActive("table"),
      canUndo: e.can().undo(),
      canRedo: e.can().redo(),
    }),
  });

  const chain = () => editor.chain().focus();

  const setBlock = (value: string) => {
    if (value === "p") chain().setParagraph().run();
    else chain().toggleHeading({ level: Number(value.slice(1)) as 2 | 3 | 4 }).run();
  };

  const setLink = () => {
    const previous = (editor.getAttributes("link").href as string | undefined) ?? "";
    const url = window.prompt("Link URL (leave empty to remove the link)", previous || "https://");
    if (url === null) return;
    if (url.trim() === "" || url.trim() === "https://") {
      chain().extendMarkRange("link").unsetLink().run();
      return;
    }
    chain().extendMarkRange("link").setLink({ href: url.trim() }).run();
  };

  const insertImage = async (file: File) => {
    setUploading(true);
    setError("");
    try {
      const src = await uploadImage(file);
      const alt = window.prompt("Describe the image for screen readers and Google (alt text)", "") ?? "";
      chain().setImage({ src, alt }).run();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const selectClass = "h-8 rounded-lg border border-black/10 bg-white px-2 text-xs font-medium text-ink outline-none focus:border-navy";

  return (
    <div className="sticky top-[60px] z-10 border-b border-black/[0.07] bg-[#fafaf8]">
      <div className="flex flex-wrap items-center gap-1 px-2 py-2">
        <select aria-label="Text style" value={s.block} onChange={(e) => setBlock(e.target.value)} className={selectClass}>
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
        </select>
        <select
          aria-label="Text colour"
          value={colours.some((c) => c.value === s.colour) ? s.colour : ""}
          onChange={(e) => (e.target.value ? chain().setColor(e.target.value).run() : chain().unsetColor().run())}
          className={selectClass}
        >
          {colours.map((c) => (
            <option key={c.label} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        <Divider />
        <Btn label="Bold" active={s.bold} onClick={() => chain().toggleBold().run()}>
          <b>B</b>
        </Btn>
        <Btn label="Italic" active={s.italic} onClick={() => chain().toggleItalic().run()}>
          <i className="font-serif">I</i>
        </Btn>
        <Btn label="Underline" active={s.underline} onClick={() => chain().toggleUnderline().run()}>
          <u>U</u>
        </Btn>
        <Btn label="Strikethrough" active={s.strike} onClick={() => chain().toggleStrike().run()}>
          <s>S</s>
        </Btn>

        <Divider />
        <Btn label="Bulleted list" active={s.bullet} onClick={() => chain().toggleBulletList().run()}>
          • List
        </Btn>
        <Btn label="Numbered list" active={s.ordered} onClick={() => chain().toggleOrderedList().run()}>
          1. List
        </Btn>
        <Btn label="Quote" active={s.quote} onClick={() => chain().toggleBlockquote().run()}>
          ❝ Quote
        </Btn>
        <Btn label="Horizontal line" onClick={() => chain().setHorizontalRule().run()}>
          — Line
        </Btn>

        <Divider />
        <Btn label="Link" active={s.link} onClick={setLink}>
          🔗 Link
        </Btn>
        <Btn label="Insert image" onClick={() => fileInput.current?.click()} disabled={uploading}>
          {uploading ? "Uploading…" : "▣ Image"}
        </Btn>
        <Btn label="Insert table" onClick={() => chain().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
          ▦ Table
        </Btn>

        <div className="ml-auto flex gap-1">
          <Btn label="Undo" onClick={() => chain().undo().run()} disabled={!s.canUndo}>
            ↶
          </Btn>
          <Btn label="Redo" onClick={() => chain().redo().run()} disabled={!s.canRedo}>
            ↷
          </Btn>
        </div>
      </div>

      {s.table && (
        <div className="flex flex-wrap items-center gap-1 border-t border-black/[0.06] px-2 py-1.5 text-xs">
          <span className="px-2 font-medium text-black/50">Table:</span>
          <Btn label="Add row" onClick={() => chain().addRowAfter().run()}>+ Row</Btn>
          <Btn label="Add column" onClick={() => chain().addColumnAfter().run()}>+ Column</Btn>
          <Btn label="Delete row" onClick={() => chain().deleteRow().run()}>− Row</Btn>
          <Btn label="Delete column" onClick={() => chain().deleteColumn().run()}>− Column</Btn>
          <Btn label="Toggle header row" onClick={() => chain().toggleHeaderRow().run()}>Header row</Btn>
          <Btn label="Delete table" onClick={() => chain().deleteTable().run()}>
            <span className="text-red-600">Delete table</span>
          </Btn>
        </div>
      )}

      {error && <p className="border-t border-black/[0.06] px-4 py-2 text-xs text-red-600">{error}</p>}

      <input
        ref={fileInput}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (file) insertImage(file);
        }}
      />
    </div>
  );
}

function Btn({ label, active, disabled, onClick, children }: { label: string; active?: boolean; disabled?: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`h-8 min-w-8 rounded-lg px-2 text-xs font-medium transition disabled:opacity-35 ${active ? "bg-ink text-white" : "text-ink hover:bg-black/[0.06]"}`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span aria-hidden="true" className="mx-1 h-5 w-px bg-black/10" />;
}
