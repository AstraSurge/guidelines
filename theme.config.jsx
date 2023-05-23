import Logo from "./components/Logo"
import { useRouter } from 'next/router'

export default {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const url =
      'https://software-development-guidelines.astrasurge.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
      </>
    )

  },
  logo: (() => {
    const { locale } = useRouter()
    return <>
      <Logo />
      <span style={{ marginLeft: '.4em', fontWeight: 800, fontSize: 20 }}>
        {locale === "zh" ? "软件开发指南" : "Software Development Guidelines"}
      </span>
    </>
  }),
  docsRepositoryBase: "https://github.com/astrasurge/software-development-guidelines",
  useNextSeoProps() {
    const { locale } = useRouter()
    return {
      titleTemplate: `%s - ${locale === "zh" ? "Astra Surge 软件开发指南" : "Astra Surge's Software Development Guidelines"}`,
    }
  },
  footer: {
    text: (
      <span style={{ textAlign: "center" }}>
        <span>GNU GPL v3.0 ©{new Date().getFullYear()}</span><a href="https://astrasurge.com" target="_blank" style={{ marginLeft: "1rem" }}><Logo size={20} /> Astra Surge</a>
      </span>
    )
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ]
}