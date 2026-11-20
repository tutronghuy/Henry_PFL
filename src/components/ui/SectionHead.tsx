interface SectionHeadProps {
  id: string;
  title: string;
  note?: string;
  className?: string;
}

/** Tiêu đề mục: kẻ ngang phía trên, tiêu đề in hoa, ghi chú ngắn bên phải (tuỳ chọn). */
export function SectionHead({ id, title, note, className }: SectionHeadProps) {
  return (
    <div className={['section-head', className].filter(Boolean).join(' ')}>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}
