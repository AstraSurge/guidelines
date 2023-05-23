import Logo from "./components/Logo"

export default {
  logo: (<>
    <Logo />
    <span style={{ marginLeft: '.4em', fontWeight: 800, fontSize: 20 }}>
      Software Development Guidelines
    </span>
  </>),
  docsRepositoryBase: "https://github.com/astrasurge/software-development-guidelines",
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Astra Surge SDG',
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