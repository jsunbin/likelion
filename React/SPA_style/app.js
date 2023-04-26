// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
const container = document.getElementById('root');


// 현재 사용자가 보고있는 페이지 정보와 화면에 보여질 리스트 아이템의 갯수를 저장하는 객체
const store = {
    currentPage: 1,
    datasPerPage: 10
};

// 환경 변수 네이밍은 대문자로 보통 사용합니다.
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // news 리스트 url
const CONTENT_URL = "https://api.hnpwa.com/v0/item/$id.json"; // news 내용 url

// url 을 입력받고 ajax 요청하여 데이터를 출력하는 함수
async function getData(url) {
    // 애플리케이션이 실행되면서 뉴스 목록 데이터를 받아옵니다.
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

// 뉴스 컨텐츠 목록을 불러오는 함수
async function newsFeed() {

    // 우선 api로부터 데이터를 받아옵니다.
    const newsFeed = await getData(NEWS_URL);

    // 총 몇개의 페이지가 만들어져야 하는지 특정합니다. 
    // 데이터의 전체 갯수 / 페이지 갯수의 올림 (만약 32개 라면 32/10 3.2의 올림하여 총 4 페이지 )
    const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);

    // DOM api 를 최소한으로 하기위해 배열을 생성하여 원소로 HTML 문자열을 할당합니다.
    const newsList = [];
    newsList.push('<ul class="bg-gray-500 flex flex-col gap-4 h-5/6 items-center justify-center">'); // ul 시작 태그를 담아둡니다.

    // 받아온 뉴스 목록을 a안에 담고 li를 생성해서 리스트화합니다. 여기서는 목록을 10개 컨텐츠 단위로 자릅니다. 현재 페이지를 기준으로 10개씩 리스트를 랜더링 하기위해 currentPage의 값을 사용합니다.
    for (let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {

        // 앵커를 클릭하면 현재 URL에 #이 붙도록 합니다. 이렇게 해야 라우터가 location.hash를 이용해 현재 페이지와 컨텐츠를 파악할 수 있습니다. 마치 옛 사람들이 별자리를 보고 현재 위치를 파악했던 것과 비슷하다고 생각하면 됩니다. (어떻게 파악했는지는 잘 모르겠지만..ㅋ)
        // 마치 앵커를 클릭했을 때 쿼리가 바뀌는 토스와 비슷합니다. 
        // https://toss.im/career/jobs?company=%EC%A0%84%EC%B2%B4


        newsList.push(`        
        <li class="rounded-sm w-2/3 bg-white shadow p-3 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
            <a href="#/detail/${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
    `);
    }
    newsList.push('</ul>'); // ul 종료 태그를 담아둡니다.

    // newsList 배열에 페이지네이션을 추가합니다. 해쉬 뒤에 링크가 페이지 이동인지, 컨텐츠로 이동인지 구분이 필요하기 때문에 앞에 'page/' 라는 이름을 붙여줍니다.
    let pageList = '';
    for (let i = 1; i < totalPages + 1; i++) {
        if (i === store.currentPage) {
            pageList += `<li><a href="#/page/${i}" class="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300">${i}</a></li>`;
        } else {
            pageList += `<li><a href="#/page/${i}" class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">${i}</a></li>`;
        }
    }

    // 현재 페이지가 1보다 작거나 전체 데이터의 갯수/10 한 값보다 많지 못하도록 예외처리도 필요합니다.
    newsList.push(
        `<nav class="bg-gray-500 flex flex-col gap-4 h-1/6 items-center justify-center">
            <ul class="list-style-none flex">
            <li><a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}" class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">이전</a></li>
            ${pageList}
            <li><a href="#/page/${store.currentPage >= (newsFeed.length / store.datasPerPage) ? store.currentPage : store.currentPage + 1}" class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">다음</a></li>
            </ul>
        </nav>`
    );
    // join을 통해 원소를 한줄의 문자열로 합칩니다.
    container.innerHTML = newsList.join('');
}

// 뉴스 컨텐츠를 불러오는 함수
async function newsDetail() {

    // location.hash : location 의 해쉬와(#) 이어지는 나머지 문자열 값을 반환합니다.
    const id = location.hash.substring(9);
    const newsContent = await getData(CONTENT_URL.replace('$id', id));

    container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
        <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
    `
}

// 라우터는 화면 중계기. 현재 url 주소를 통해 화면에 랜더링 해야할 화면을 결정하는 역할을 합니다.
function router() {

    const routePath = location.hash;

    // 만약 #값이 없다면 첫화면으로. location.hash는 # 하나만 있으면 빈문자열로 인식합니다.
    if (routePath === '') {
        newsFeed();
        // url에 /page/ 문자열이 있는지 파악하여 이전, 다음 페이지 앵커를 클릭했는지 판단합니다.
    } else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = parseInt(routePath.substring(7));
        newsFeed();
    } else {
        newsDetail();
    }
}

// location의 해쉬가 바뀔때마다 발생하는 이벤트를 생성
window.addEventListener('hashchange', router);

router();