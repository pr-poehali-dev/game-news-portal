import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredReviews = [
    {
      title: "Cyberpunk 2077: Phantom Liberty",
      description: "Обзор долгожданного дополнения к культовой игре",
      rating: 9.2,
      type: "AAA",
      image: "/img/78ed8431-d818-4940-a627-3918740105e3.jpg",
    },
    {
      title: "Pizza Tower",
      description: "Инди-платформер с безумной энергией и стилем",
      rating: 8.8,
      type: "Indie",
      image: "/img/d1069ecf-e2d6-41fc-afc4-fa44fae59b5a.jpg",
    },
    {
      title: "Baldur's Gate 3",
      description: "Эпическая RPG, которая переопределяет жанр",
      rating: 9.6,
      type: "AAA",
      image: "/img/bcb7c1a5-cabd-4197-b1e7-781b855a61fa.jpg",
    },
    {
      title: "Hollow Knight: Silksong",
      description: "Долгожданное продолжение инди-шедевра",
      rating: 9.1,
      type: "Indie",
      image: "/img/78ed8431-d818-4940-a627-3918740105e3.jpg",
    },
  ];

  const latestNews = [
    {
      title: "Новый трейлер GTA VI побил рекорды просмотров",
      time: "2 часа назад",
      category: "Новости",
    },
    {
      title: "Indie World: анонсированы 15 новых игр",
      time: "5 часов назад",
      category: "Анонсы",
    },
    {
      title: "Game Awards 2024: победители и сюрпризы",
      time: "1 день назад",
      category: "События",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-orange to-gaming-blue opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-gaming-orange to-gaming-blue bg-clip-text text-transparent">
              GAMING NEWS
            </h1>
            <p className="text-xl font-roboto text-muted-foreground mb-8 max-w-2xl mx-auto">
              Твой главный источник новостей, обзоров и гайдов по играм. От
              инди-шедевров до AAA-блокбастеров.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gaming-orange hover:bg-gaming-orange/90 text-white px-8 py-3">
                <Icon name="Gamepad2" className="mr-2" />
                Последние обзоры
              </Button>
              <Button
                variant="outline"
                className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue/10 px-8 py-3"
              >
                <Icon name="Trophy" className="mr-2" />
                Лучшие игры
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold font-orbitron text-gaming-orange">
                GAMING NEWS
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-foreground hover:text-gaming-orange transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-gaming-orange transition-colors"
                >
                  Игровые новости
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-gaming-orange transition-colors"
                >
                  Обзоры игр
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-gaming-orange transition-colors"
                >
                  Гайды
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-gaming-orange transition-colors"
                >
                  О нас
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Featured Reviews Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-orbitron mb-4 text-gaming-orange">
              Галерея обзоров
            </h2>
            <p className="text-muted-foreground font-roboto">
              Подробные обзоры инди-игр и AAA-проектов от наших экспертов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReviews.map((review, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-gaming-blue/20"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={review.type === "AAA" ? "default" : "secondary"}
                      className={
                        review.type === "AAA"
                          ? "bg-gaming-orange"
                          : "bg-gaming-blue"
                      }
                    >
                      {review.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/60 px-2 py-1 rounded">
                      <Icon
                        name="Star"
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                      <span className="text-white font-bold">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-orbitron text-lg leading-tight">
                    {review.title}
                  </CardTitle>
                  <CardDescription className="font-roboto">
                    {review.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gaming-orange hover:bg-gaming-orange/90">
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Читать обзор
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-gaming-blue">
                Последние новости
              </h2>
              <div className="space-y-6">
                {latestNews.map((news, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className="border-gaming-blue text-gaming-blue"
                        >
                          {news.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {news.time}
                        </span>
                      </div>
                      <CardTitle className="font-roboto text-xl hover:text-gaming-orange cursor-pointer transition-colors">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-orbitron mb-6 text-gaming-orange">
                Популярные гайды
              </h3>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-roboto text-base">
                      Как пройти Dark Souls III без смертей
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Eye" className="h-4 w-4" />
                      <span>12.5K просмотров</span>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-roboto text-base">
                      Лучшие настройки для киберспорта
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Eye" className="h-4 w-4" />
                      <span>8.2K просмотров</span>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-roboto text-base">
                      Топ-10 инди-игр 2024 года
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Eye" className="h-4 w-4" />
                      <span>15.8K просмотров</span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold font-orbitron text-gaming-orange mb-4">
              GAMING NEWS
            </div>
            <p className="text-muted-foreground font-roboto mb-6">
              Твой гид в мире игр. Обзоры, новости, гайды.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
