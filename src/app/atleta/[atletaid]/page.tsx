import React from 'react'
import Image from 'next/image'
type AtletaProps = {
  params: {
    atletaid: string
  }
}

export default function Atleta({ params }: AtletaProps) {
  const { atletaid } = params
  return (
    <section>
      <header className="flex items-center justify-around bg-primary mt-[40px] h-[136px] relative">
        <Image src="/images/estrela-branca.svg" width="168" height="163" alt="estrela branca" className="absolute  left-[-70px]" />
        <div className="flex items-center">
          <Image src='/images/atleta.png' width="102" height="102" alt="imagem do atleta" />
          <div className="ml-7">
            <h1 className="font-title text-5xl text-white">Vanessa dos santos</h1>
            <span className="text-[20px] text-secondary">meucontato@email.com.br</span>
          </div>
        </div>
        <a href="/apoio" className="py-6 px-14 bg-secondary text-primary uppercase hover:bg-white hover:text-black ease-in-out duration-200 my-8">apoiar atleta</a>
      </header>

      <article className="mt-[60px]">
        <h2 className="font-title text-[64px]">Projeto vanessa competindo profissionalmente</h2>
        <div className="text-lg">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tellus sed dolor pretium dictum. Vivamus vel feugiat metus. Nulla eu elit ante. Vivamus egestas arcu ex, vitae tempor est auctor in. Nunc dignissim, massa non pharetra sollicitudin, quam libero mattis erat, sit amet pharetra elit urna quis mauris. Sed sagittis, felis sit amet facilisis iaculis, velit enim porta metus, ut dapibus ipsum tellus ut massa. </p>
          <br />
          <p>Pellentesque arcu felis, rutrum eget convallis nec, tempor ut nunc. Sed non tortor condimentum, vulputate magna nec, interdum sem.
            Curabitur non interdum massa, eu efficitur lacus. Maecenas sagittis, diam eget facilisis vehicula, risus erat porta nisl, quis volutpat tortor ante quis enim. Suspendisse lacinia, nisl quis fermentum porttitor, augue arcu euismod magna, at dictum nisi enim vel purus. Aliquam nec nunc nulla. Pellentesque quis tortor vitae sem fermentum efficitur sed sit amet ligula. Sed nec ante vel erat sollicitudin lacinia quis non tortor. Maecenas diam arcu, ultricies ac lacus a, fringilla imperdiet dolor. Praesent sit amet feugiat ipsum. Suspendisse at lectus hendrerit, maximus elit ac, scelerisque nisi. Duis lectus risus, pretium et magna a, rhoncus tempus mi. Donec et nisl a leo sodales blandit. Aenean accumsan vel augue vel iaculis. Mauris nulla odio, ornare eu nisl eu, pulvinar fringilla augue. Donec maximus ante quam, et condimentum augue vestibulum sit amet. Duis sit amet ullamcorper justo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tellus sed dolor pretium dictum. Vivamus vel feugiat metus. Nulla eu elit ante. Vivamus egestas arcu ex, vitae tempor est auctor in. Nunc dignissim, massa non pharetra sollicitudin, quam libero mattis erat, sit amet pharetra elit urna quis mauris. Sed sagittis, felis sit amet facilisis iaculis, velit enim porta metus, ut dapibus ipsum tellus ut massa. </p>
          <br />
          <p>Pellentesque arcu felis, rutrum eget convallis nec, tempor ut nunc. Sed non tortor condimentum, vulputate magna nec, interdum sem.
            Curabitur non interdum massa, eu efficitur lacus. Maecenas sagittis, diam eget facilisis vehicula, risus erat porta nisl, quis volutpat tortor ante quis enim. Suspendisse lacinia, nisl quis fermentum porttitor, augue arcu euismod magna, at dictum nisi enim vel purus. Aliquam nec nunc nulla. Pellentesque quis tortor vitae sem fermentum efficitur sed sit amet ligula. Sed nec ante vel erat sollicitudin lacinia quis non tortor. Maecenas diam arcu, ultricies ac lacus a, fringilla imperdiet dolor. Praesent sit amet feugiat ipsum. Suspendisse at lectus hendrerit, maximus elit ac, scelerisque nisi.</p>
        </div>
        <a href="/apoio" className="py-6 px-14 bg-secondary text-primary uppercase hover:bg-primary hover:text-secondary ease-in-out duration-200 my-8">apoiar atleta</a>
      </article>
    </section>
  )
}
