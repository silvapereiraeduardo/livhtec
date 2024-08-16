import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="flex flex-col min-h-[100dvh]">
        <header className="container px-4 md:px-6 h-14 flex items-center">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <div className="flex gap-2 items-center">
              <LivhtecIcon className="h-12 w-12" />
              <span className="sr-only md:not-sr-only font-bold">
                Livhtec Solutions
              </span>
            </div>
          </Link>

          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Clients
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>

            <Button
              type="button"
              variant={'outline'}
              className="text-sm font-medium hover:underline underline-offset-4 p-0 overflow-hidden rounded-xl w-[25px] h-[25px]"
            >
              <img
                src="/united-states-flag.png"
                width="30"
                height="30"
                alt="Hero"
                className="object-cover aspect-[1/2]"
              />
            </Button>
          </nav>
        </header>

        <main className="flex-1">
          <section
            className="w-full py-6 md:py-16"
            style={{ backgroundImage: 'url("/square-versatiles.svg")' }}
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Elevate Your IT with Livhtec Solutions
                    </h1>
                    <p className="max-w-[600px] text-foreground md:text-xl">
                      Unlock the full potential of your technology with our
                      expert IT consulting services.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#" prefetch={false}>
                      <Button type="button" variant={'tertiary'}>
                        Get a Quote
                      </Button>
                    </Link>
                    <Link href="#" prefetch={false}>
                      <Button type="button" variant={'ghost'}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <img
                  src="/undraw_online_test_re_kyfx.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-contain lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-6 md:py-16 bg-card">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Our Key Services
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Livhtec Solutions offers a wide range of services to help
                    your business thrive in the digital age.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="grid gap-1">
                  <div className="flex items-center gap-4">
                    <CloudIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Cloud Infrastructure</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Migrate your systems to the cloud and optimize your
                    infrastructure for scalability and reliability.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center gap-4">
                    <ConciergeBellIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">IT Consulting</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our experienced consultants will help you align your
                    technology with your business goals.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center gap-4">
                    <LockIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Cybersecurity</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Protect your data and systems from cyber threats with our
                    comprehensive security solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-6 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from the businesses we've helped transform with our IT
                    solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg border bg-background p-6 shadow-sm">
                    <blockquote className="flex flex-col justify-between h-full">
                      <div>
                        <p className="text-muted-foreground">
                          "Livhtec Solutions has been an invaluable partner in\n
                          our digital transformation. Their expertise and\n
                          dedication have been instrumental in driving our\n
                          business forward."
                        </p>
                      </div>
                      <div className="mt-4 flex items-center space-x-4">
                        <img
                          src="/placeholder.png"
                          width="80"
                          height="40"
                          alt="Client Logo"
                          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <div>
                          <div className="text-sm font-medium">
                            Emerson Ribeiro, CEO
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Livhtec Solutions
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="rounded-lg border bg-background p-6 shadow-sm">
                    <blockquote className="flex flex-col justify-between h-full">
                      <div>
                        <p className="text-muted-foreground">
                          "Working with Livhtec Solutions has been a
                          game-changer\n for our business. Their innovative
                          solutions and\n exceptional support have helped us
                          streamline our\n operations and drive growth."
                        </p>
                      </div>
                      <div className="mt-4 flex items-center space-x-4">
                        <img
                          src="/placeholder.png"
                          width="80"
                          height="40"
                          alt="Client Logo"
                          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <div>
                          <div className="text-sm font-medium">
                            John Smith, CTO
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Globex Corporation
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="rounded-lg border bg-background p-6 shadow-sm">
                    <blockquote className="flex flex-col justify-between h-full">
                      <div>
                        <p className="text-muted-foreground">
                          "Livhtec Solutions's expertise and personalized\n
                          approach have been instrumental in helping us\n
                          navigate the complexities of our IT infrastructure.\n
                          We highly recommend their services."
                        </p>
                      </div>
                      <div className="mt-4 flex items-center space-x-4">
                        <img
                          src="/placeholder.png"
                          width="80"
                          height="40"
                          alt="Client Logo"
                          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <div>
                          <div className="text-sm font-medium">
                            Sarah Lee, IT Manager
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Stark Industries
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-6 md:py-16">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Expertise
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about our specialized services and how we can help
                  your business.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <DatabaseIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Database Management</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our experts will help you design, implement, and maintain
                    robust database solutions to power your applications.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <NetworkIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Network Security</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Protect your network and data from cyber threats with our
                    comprehensive security services.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <DatabaseIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Data Analytics</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Unlock the power of your data with our advanced analytics
                    solutions, helping you make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-6 md:py-16 bg-card">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Get in Touch
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Fill out the form below to schedule a free consultation and
                    learn how Livhtec Solutions can help your business.
                  </p>
                </div>
                <form className="space-y-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" className="w-full" rows={4} />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row container py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Livhtec Solutions. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            {/* <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link> */}
          </nav>
        </footer>
      </div>
    </>
  )
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function LivhtecIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      version="1.0"
      width="1200.000000pt"
      height="867.000000pt"
      viewBox="0 0 1200.000000 867.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,867.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3335 8010 c-71 -14 -169 -55 -227 -93 -124 -83 -231 -232 -263 -368
-19 -82 -19 -228 0 -304 43 -171 169 -326 325 -404 147 -72 146 -72 1062 -69
744 3 807 5 858 22 216 71 383 242 436 447 22 84 22 226 1 307 -48 180 -169
328 -334 408 -133 64 -122 64 -1013 63 -443 -1 -823 -5 -845 -9z"
        />
        <path
          d="M6705 8001 c-118 -29 -200 -76 -291 -166 -135 -134 -190 -275 -182
-465 10 -224 123 -409 316 -517 137 -77 131 -76 752 -83 619 -6 597 -4 695
-78 109 -82 160 -197 153 -340 -4 -73 -10 -97 -37 -150 -42 -83 -106 -146
-189 -185 l-67 -32 -2600 -5 c-2881 -6 -2625 1 -2771 -71 -49 -24 -93 -57
-150 -114 -129 -129 -184 -258 -184 -433 0 -119 13 -179 62 -281 71 -148 214
-269 388 -328 52 -17 145 -18 2030 -23 2211 -6 2009 2 2115 -78 105 -80 158
-185 158 -317 0 -175 -108 -324 -272 -375 -59 -19 -92 -20 -512 -20 -505 0
-549 -4 -677 -67 -85 -42 -193 -138 -248 -220 -21 -31 -51 -96 -67 -143 -26
-73 -30 -100 -30 -190 -1 -72 5 -124 17 -165 52 -174 168 -317 319 -394 135
-68 73 -65 1127 -71 l955 -5 68 -32 c82 -39 154 -110 194 -190 26 -53 28 -67
28 -168 0 -101 -2 -115 -29 -170 -39 -79 -110 -149 -194 -188 l-67 -32 -1745
-5 c-1630 -5 -1749 -6 -1804 -23 -215 -64 -388 -241 -441 -452 -18 -69 -20
-211 -4 -287 6 -29 29 -91 51 -138 32 -67 57 -101 117 -161 84 -84 151 -126
256 -161 l70 -23 2535 0 2535 0 85 23 c280 74 510 274 615 535 70 172 65 -74
65 3130 l0 2894 -24 96 c-88 348 -371 611 -721 672 -75 13 -248 15 -1209 14
-1028 0 -1127 -2 -1191 -18z"
        />
        <path
          d="M2891 3929 c-138 -28 -246 -85 -341 -182 -133 -135 -199 -328 -172
-506 22 -152 75 -261 178 -365 73 -72 145 -117 246 -154 l73 -27 480 -3 c547
-4 571 -1 715 69 161 79 284 235 326 414 23 101 15 246 -19 345 -51 143 -163
274 -296 344 -138 71 -123 70 -661 72 -267 1 -505 -2 -529 -7z"
        />
      </g>
    </svg>
  )
}

function ConciergeBellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
      <path d="M20 16a8 8 0 1 0-16 0" />
      <path d="M12 4v4" />
      <path d="M10 4h4" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
