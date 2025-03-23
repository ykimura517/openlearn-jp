import { initializeApp, getApps, cert } from "firebase-admin/app"

// Firebase Adminの初期化
export function initializeFirebaseAdmin() {
  if (getApps().length === 0) {
    // 実際のアプリケーションでは環境変数から取得します
    const serviceAccount = {
      projectId: "openlearn-jp",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7VJTUt9Us8cKj\nMzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvu\nNMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZ\n-----END PRIVATE KEY-----\n",
      clientEmail: "firebase-adminsdk-dummy@openlearn-jp.iam.gserviceaccount.com",
    }

    initializeApp({
      credential: cert(serviceAccount as any),
    })
  }
}

