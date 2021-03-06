import db from '#/datastore'
import { clipboard } from 'electron'

export function handleCopyUrl (str: string): void {
  if (db.get('settings.autoCopy') !== false) {
    clipboard.writeText(str)
  }
}
