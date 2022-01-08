import { Discuzz } from '@discuzz/discuzz'
import LocaleProviderEn from '@discuzz/locale-en'
import AuthFirebase from '@discuzz/auth-firebase'
import DataFirestore from '@discuzz/data-firestore'

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
