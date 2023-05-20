import { sanitize } from "isomorphic-dompurify"
import parse from "html-react-parser"

export function renderHtml(htmlInput: string) {
  const clean = sanitize(htmlInput, { USE_PROFILES: { html: true } })
  return parse(clean)
}
