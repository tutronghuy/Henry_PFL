import { useEffect, useState } from 'react';

/** Trả về id của mục đang hiển thị trong khung nhìn để làm nổi bật mục trên thanh điều hướng. */
export function useScrollSpy(ids: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
      }
      // Ở cuối trang, mục cuối không thể cuộn lên đỉnh: chọn mục cuối.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && ids.length > 0) current = ids[ids.length - 1];
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
