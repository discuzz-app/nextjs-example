import lazy from 'next/dynamic'
import { Discuzz, loadService } from '@discuzz/discuzz'

const LocaleProviderEn = lazy(() => import('@discuzz/locale-en'), { ssr: false })

const AuthFirebase = loadService(() => import('@discuzz/auth-firebase'))
const DataFirestore = loadService(() => import('@discuzz/data-firestore'))

export default function Index() {
  return (
    <div>
        <Discuzz
          url={global.location && global.location.href}
          service={{
            auth: AuthFirebase,
            data: DataFirestore,
            config: {
              apiKey: "AIzaSyDm837cbdbvkrAdYL9TAqUF3iML6UvZXk4",
              authDomain: "fire-talk-88.firebaseapp.com",
              projectId: "fire-talk-88",
              storageBucket: "fire-talk-88.appspot.com",
              messagingSenderId: "719566664522",
              appId: "1:719566664522:web:e1a9d26be22387e55b47b3",
            }
          }}
          theme="light"
          auths={['google', 'apple', 'facebook', 'github', 'twitter', 'microsoft', 'yahoo']}
          locale={LocaleProviderEn}
        />
    </div>
  );
}
