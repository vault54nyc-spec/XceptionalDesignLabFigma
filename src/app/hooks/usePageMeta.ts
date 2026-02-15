import { useEffect } from "react";

type PageMeta = {
  title?: string;
  description?: string;
};

export function usePageMeta(meta: PageMeta) {
  const { title, description } = meta;

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let tag = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }

      tag.content = description;
    }
  }, [title, description]);
}

