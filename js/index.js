const tours = [
	{
		desc: `Ямайка является островным королевством в бассейне Карибского моря и входит в состав Британского содружества. Это экзотическая страна, привлекающая неповторимой культурой и удивительной красоты пейзажами. На северо-западе расположены территориальные воды Кубы, на востоке – Гаити, на юге – Колумбии. Если и есть на Земле места, где не ступала нога человека, то они находятся именно на Ямайке. Умиротворение, единение с природой, сочетание шума волн и ненавязчивых музыкальных ритмов – все это гарантирует прекрасный отдых.`,
		image: './images/tour-1.jpg',
		can_buy: true,
		title: 'Ямайка',
	},
	{
		desc: `Карибское море — полузамкнутое море Атлантического океана, между Центральной и Южной Америкой на западе и юге и Большими и Малыми Антильскими островами на севере и востоке. На северо-западе соединяется Юкатанским проливом с Мексиканским заливом, на северо-востоке и востоке — проливами между Антильскими островами с Атлантическим океаном, на юго-западе — искусственным Панамским каналом с Тихим океаном.`,
		image: './images/tour-2.jpg',
		can_buy: false,
		title: 'Карибское море',
	},
	{
		desc: 'Кипр – остров в Средиземном море, разделенный между двумя государствами – Республикой Кипр с преимущественно греческим населением и Турецкой Республикой Северный Кипр, имеющей серьезные проблемы с международным признанием и сложности с визами. Памятники археологии античной и византийской эпохи, песчаные пляжи с развитой инфраструктурой, мягкий климат, мелкое море, пронизывающие остров дорожные сети, разнообразие цен и высокий уровень сервиса – все это привлекает на Кипр туристов со всей Европы. Большинство курортных городов популярно в летний сезон, но отдельные туристические места рассчитаны на круглогодичный отдых.',
		image: './images/tour-3.jpg',
		can_buy: true,
		title: 'Кипр',
	},
	{
		desc: 'Афины — это особый город: ни одна европейская столица не может похвастаться подобным историческим и культурным наследием. Он по праву зовется колыбелью демократии и западной цивилизации. Жизнь Афин по-прежнему вращается вокруг свидетеля ее зарождения и процветания – Акрополя, одного из семи холмов, окружающих город, который высится над ним словно каменный корабль, на палубе которого раскинулся древний Парфенон.',
		image: './images/tour-4.jpg',
		can_buy: false,
		title: 'Афины',
	},
];

document.querySelectorAll('.link').forEach(element => {
	const current_page = element.children[0].getAttribute('href').replace('./', '');
	const current_location = window.location.toString();
	if (!~current_location.search('index.html') && current_page == 'index.html') {
		element.style.borderLeft = '1px solid white';
	} else if (!~current_location.search(current_page)) {
		element.style.borderBottom = '1px solid white';
	}
});

const show_slide = (slide_index = 0) => {
	const carousel_title = document.getElementById('carousel-title');
	const carousel_desc = document.getElementById('carousel-desc');
	const carousel_button = document.getElementById('carousel-button');
	const carousel_image = document.getElementById('carousel-image');

	if (!carousel_title || !carousel_desc || !carousel_button || !carousel_image) {
		return;
	}

	carousel_title.innerText = tours[slide_index].title;
	carousel_desc.innerText = tours[slide_index].desc;
	carousel_button.innerText = tours[slide_index].can_buy ? 'Купить билет' : 'Нет билетов';
	carousel_image.style.backgroundImage = `url(${tours[slide_index].image})`;
};

show_slide();

const slides_count = tours.length;
let current_slide = 0;
let can_auto_slide = true;
let auto_slide_timeout;

document.querySelector('.carousel-to-left')?.addEventListener('click', () => {
	auto_slide_timeout && clearTimeout(auto_slide_timeout);
	can_auto_slide = false;

	current_slide--;
	if (current_slide < 0) {
		current_slide = slides_count - 1;
	}

	show_slide(current_slide);
	auto_slide_timeout = setTimeout(() => {
		can_auto_slide = true;
	}, 1000);
});

document.querySelector('.carousel-to-right')?.addEventListener('click', () => {
	auto_slide_timeout && clearTimeout(auto_slide_timeout);
	can_auto_slide = false;

	current_slide++;
	if (current_slide > slides_count - 1) {
		current_slide = 0;
	}

	show_slide(current_slide);
	auto_slide_timeout = setTimeout(() => {
		can_auto_slide = true;
	}, 1000);
});

setInterval(() => {
	if (!can_auto_slide) {
		return;
	}
	current_slide++;
	if (current_slide > slides_count - 1) {
		current_slide = 0;
	}
	show_slide(current_slide);
}, 5000);

const chars = [];
document.addEventListener('keydown', event => {
	chars.length == 3 && chars.shift();
	chars.push(event.which || event.keyCode);
	chars.join('').search(/657382/gim) != -1 &&
		alert('Введён секретный код: AIR\nВы выйграли бесплатный полёт за счёт авиакомпании :)');
	return;
});
