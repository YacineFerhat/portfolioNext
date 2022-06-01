export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <p
        className="flex items-center justify-center gap-2"
      >
        © {year} Copyright Yacine Ferhat{' '}
      </p>
    </footer>
  )
}
