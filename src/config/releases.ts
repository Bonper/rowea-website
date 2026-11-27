export type ReleaseStatus = 'coming_soon' | 'available';

export interface AndroidApkRelease {
  status: ReleaseStatus;
  version: string | null;
  fileSize: string | null;
  sha256: string | null;
  downloadUrl: string | null;
  releaseDate: string | null;
}

/**
 * Phase 1 Release Manifest.
 * Intentionally defaults to 'coming_soon' with null release metadata
 * so no placeholder version numbers, fake file sizes, or dummy APK links
 * are ever presented to visitors.
 */
export const RELEASE_MANIFEST: {
  androidApk: AndroidApkRelease;
  pwaStatus: ReleaseStatus;
} = {
  androidApk: {
    status: 'coming_soon',
    version: null,
    fileSize: null,
    sha256: null,
    downloadUrl: null,
    releaseDate: null,
  },
  pwaStatus: 'coming_soon',
};
