export default function SiteFooter({ note }: { note: string }) {
  return (
    <footer className="site-footer">
      <div className="container">© 2026 AMOS.IO — {note}</div>
    </footer>
  )
}
