"use client";

import { useEffect } from "react";

interface BlogViewTrackerProps {
  blogId: string;
}

export default function BlogViewTracker({
  blogId,
}: BlogViewTrackerProps) {
  useEffect(() => {
    const key = `blog-viewed-${blogId}`;

    if (sessionStorage.getItem(key)) {
      return;
    }

    sessionStorage.setItem(key, "true");

    fetch(`/api/blogs/${blogId}/views`, {
      method: "POST",
    }).catch(() => {});
  }, [blogId]);

  return null;
}