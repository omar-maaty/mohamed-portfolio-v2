export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* اسم الموقع (مع ScrollLink لو حبيت ترجع للـ Home) */}
        <div className="flex flex-col items-center border-b border-border pb-8">
          <h1 className="font-bold text-xl cursor-pointer">
            Mohamed<span className="text-primary">ElMaaty</span>
          </h1>
        </div>

        {/* الحقوق والرابط */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Mohamed ElMaaty. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="http://t.me/Omaaaa_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Developed by OMAR_M
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
