import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";


export function Home() {
  const [clients, setClients] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      clients < 200 && setClients(clients + 1);
    }, 1);
  });

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/home-background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Le meilleur poisson à portée de clic.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Tirez le meilleur profit de votre cuisine avec les délicieux poissons frais :
                savourez la variété des saveurs,
                délectez-vous de poisson frais et délicieux !
                Achetez maintenant et profitez de la meilleure qualité de poisson
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Travailler avec vous est un plaisir
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Nous assurons une production mensuelle de plus 1000 individu.
                L'élevage se fait dans des bassins naturel dans des eaux saines
                continuellement filtrées et épurées.
                <br />
                <br />
                Afin d'assurer leur croissance, nous les nourrisont avec des aliments
                riches en protéines, vitamines et en minéraux
              </Typography>
              <a
                href="https://wa.me/+237670269063?text=Hi,%20I'm%20interested%20in%20your%20fish%20for%20sale"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="outlined">Commander Maintenant</Button>
              </a>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/home-image-1.JPG"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Silure Axiale
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    La silure est un poisson bon marché, ce qui en fait un mets accessible à tous.
                    Alors n’hésitez pas à essayer le poisson silure pour vos menus !
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading={`${clients}+ Clients satisfaits`}>
            Nous sommes fiers de vous offrir une variété de poissons frais et de qualité,
            tous directement sélectionnés par nos experts pour en assurer la qualité et la fraîcheur,
            nous assurons pour le moment la production de la silure élevé en milieu naturel
          </PageTitle>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          {/* <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form> */}
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
