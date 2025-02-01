import { remark } from "remark";
import html from "remark-html";
import breaks from "remark-breaks";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(breaks) // 개행을 <br>로 변환
    .use(html, { sanitize: false }) // HTML 태그 보존
    .process(markdown);
  return result.toString();
}
