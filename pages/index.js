import lazy from 'next/dynamic'

const Discuzz = lazy(() => import('@discuzz/discuzz').then((mod) => mod.Discuzz), { ssr: false })
const LocaleProviderEn = lazy(() => import('@discuzz/locale-en'), { ssr: false })
const ComposerPlaintext = lazy(() => import('@discuzz/composer-plaintext'), { ssr: false })
const ViewerPlaintext = lazy(() => import('@discuzz/viewer-plaintext'), { ssr: false })

export default function Home() {
  return (
    <div>
      {global.window && (
        <Discuzz
          url={global.location.href}
          service={{
            apiKey: "AIzaSyDm837cbdbvkrAdYL9TAqUF3iML6UvZXk4",
            authDomain: "fire-talk-88.firebaseapp.com",
            projectId: "fire-talk-88",
            storageBucket: "fire-talk-88.appspot.com",
            messagingSenderId: "719566664522",
            appId: "1:719566664522:web:e1a9d26be22387e55b47b3"
          }}
          theme="light"
          auths={['google', 'apple', 'facebook', 'github', 'twitter', 'microsoft', 'yahoo']}
          config={{
            composer: ComposerPlaintext,
            viewer: ViewerPlaintext
          }}
          locale={LocaleProviderEn}
        />
      )}
    </div>
  )
}
