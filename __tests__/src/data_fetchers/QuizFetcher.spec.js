import QuizFetcher from '../../../src/data_fetchers/QuizFetcher'

describe('QuizFetcherのテスト', () => {
  it('クラスチェック', () => {
    expect( typeof QuizFetcher).toStrictEqual('function');
  })
});