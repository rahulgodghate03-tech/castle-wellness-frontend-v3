import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";

export function useBusiness() {
  const router = useRouter();
  const { business: slug } = router.query;
  const [business, setBusiness] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    api
      .get(`/businesses/${slug}`)
      .then((res) => setBusiness(res.data.business))
      .catch(() => setNotFound(true));
  }, [slug]);

  return { business, slug, notFound };
}
