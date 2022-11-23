export interface NaverBookType {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}

export const dummyNaverBook: NaverBookType = {
  author: '후안 마요르가',
  description:
    '스페인의 젊은 극작가, 후안 마요르가의 작품이다. ‘피리 부는 사나이’의 전설을 모티브로 우리가 당면해 있는 ‘아동성범죄’의 책임을 구명했다. 눈앞의 이익에 급급해 무관심과 무책임으로 일관하던 어른들이 결국 소중한 아이들을 잃는다는 비극…',
  discount: '13320',
  image:
    'https://shopping-phinf.pstatic.net/main_3249610/32496107738.20221019123923.jpg',
  isbn: '9791128835971',
  link: 'https://search.shopping.naver.com/book/catalog/32496107738',
  pubdate: '20190715',
  publisher: '지만지드라마',
  title: '하멜린',
};
