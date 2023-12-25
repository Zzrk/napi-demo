import { sync, sleep } from '@napi-rs/package-template'
import test from 'ava'

test('sync function from native code', (t) => {
  const fixture = 42
  t.is(sync(fixture), fixture + 100)
})

test('async function from native code', async (t) => {
  const fixture = 42
  t.is(await sleep(fixture), fixture * 2)
})
