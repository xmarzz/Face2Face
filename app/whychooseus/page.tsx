import React from 'react'
import Image4 from '@/public/image4.avif'
import Image from 'next/image'

const page = () => {
  return (
    <div className="why-choose-us">
          <div>
            <Image src={Image4} alt='barber' className='image image4' />
          </div>
          <div>
          <h2>Why Choose Face 2 Face?</h2>
          <p>
            Experienced Barbers: Our team of experienced barbers brings years of
            expertise to the styling chair, ensuring precision and attention to
            detail with every service.
          </p>
          <p>
            Warm and Friendly Atmosphere: Step into a welcoming environment
            where you can relax and enjoy the grooming process. We believe in
            creating a friendly atmosphere for our customers.
          </p>
          <p>
            Modern and Traditional Styles: Whether you prefer a contemporary
            haircut or a timeless, classic look, we offer a variety of styles to
            suit your taste.
          </p>
          <p>
            Hygiene and Cleanliness: Your well-being is our priority. We
            maintain high standards of hygiene and cleanliness throughout our
            barbershop.
          </p>
          </div>
    </div>
  )
}

export default page
