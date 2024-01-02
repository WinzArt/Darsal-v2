import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { Divider, ImgFrame, Label, PostCard } from '../../components'
import { images } from '../../assets'

const Post = () => {
  return (
    <div className='flex flex-col justify-between gap-10 gap-x-20 md:flex-row'>
      <div className='flex max-w-3xl flex-col gap-4 2xl:max-w-4xl'>
        <Label title='Category' className='bg-blue-100 text-blue-500' />
        <h2 className='font-extrabold text-emerald-700'>
          Judul Berita Terbaru
        </h2>
        <div className='flex items-center gap-1 text-sm'>
          <Icon icon='mdi:clock-time-eight' />
          <p>21 December 2023, 10:33 WIB</p>
        </div>
        <ImgFrame image={images.sispala} caption='Image Caption' />
        <h4 className=''>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam error
          aspernatur mollitia beatae praesentium laborum ducimus nesciunt
          officiis, delectus ea eaque optio ex tenetur, ullam molestiae dolor et
          voluptates corrupti, enim illum nostrum ipsa fuga maxime? Beatae
          voluptatum magni architecto.
        </h4>
        <div>
          <ImgFrame
            image={images.sispala}
            caption='Image Caption'
            className='float-left mr-4 max-w-xs'
            imgClass='!aspect-2/3'
          />
          <p className='clear-right'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui earum
            laudantium alias in dolorem saepe minima pariatur nihil cupiditate,
            minus amet neque quisquam assumenda quo perferendis nisi dolor
            doloribus incidunt animi tempora perspiciatis! Assumenda, excepturi
            soluta! Ea unde error consequuntur quis! Sit dolor voluptatem ab
            illum facere voluptate dolores, sapiente reiciendis consequuntur
            numquam odit maiores, officiis dolore inventore sint labore aperiam
            illo enim? Sed temporibus eius non aliquid vero quasi nihil,
            voluptatem cumque. Eum, quos qui dicta maiores ipsam dolores beatae
            consequatur, modi cupiditate ipsum mollitia porro repellendus saepe
            odit sequi ut quidem. Blanditiis error accusamus amet optio
            temporibus quia incidunt nisi corrupti iure, adipisci, modi quidem.
            Et voluptatem dolores dicta quis hic, dolorum repudiandae mollitia,
            vel ipsum officiis quasi quos. Earum harum, quam ratione, voluptatem
            incidunt quo, et quis repellat at qui nulla voluptates unde ea ipsam
            eius id corrupti praesentium. Recusandae dolor, ipsam nesciunt
            debitis illo saepe aperiam, quis adipisci commodi quidem tenetur.
            Odio, velit sed eveniet dicta ipsam, ipsa quisquam ipsum soluta
            itaque sunt, totam omnis. Quasi, exercitationem, non rem explicabo
            quod placeat harum veritatis accusamus qui deserunt doloremque id
            minus ipsa ullam repudiandae accusantium dolor impedit dolore.
            Inventore quam esse distinctio commodi? Placeat dolore porro omnis
            voluptate? Facere, magni ipsam modi porro excepturi officia sed
            voluptatibus culpa praesentium maxime officiis molestias? Harum
            facilis eaque facere adipisci repellendus tempore architecto ab
            recusandae alias voluptates dicta asperiores velit reiciendis
            laborum laudantium iusto obcaecati ad, ullam, quam eveniet animi
            quidem accusamus et sunt. Maxime libero soluta repellendus tempora
            minima omnis nobis facere commodi deleniti incidunt, quibusdam saepe
            aut ut odio ipsum neque sunt cumque tempore qui blanditiis voluptate
            voluptates quos nemo molestias? Beatae dolorum esse delectus
            accusantium nesciunt corporis quos veritatis maxime vel. Illo
            exercitationem voluptates debitis cupiditate magnam quod ut, rerum
            itaque veniam excepturi minima tempora provident odio molestiae,
            dolorem quis fugiat deserunt cum consequuntur ducimus commodi
            dolores voluptatibus! Quibusdam eveniet assumenda architecto at
            suscipit quod repudiandae corporis odio voluptatibus praesentium
            soluta sit odit molestias sint in et est nesciunt, eius ex deleniti
            commodi corrupti animi inventore culpa! Repellendus sit eligendi
            dolorum laudantium, obcaecati quisquam eum iure. Et a quia impedit
            non blanditiis deserunt esse neque doloribus nemo magnam illo
            dolorum, beatae nihil amet, suscipit voluptatibus similique! Cum
            mollitia quia error iure. Fuga earum hic quas sed libero. Autem unde
            quaerat non, aliquid vel consectetur quam pariatur a! Magnam
            temporibus in repellat vero ab aliquid quae laudantium saepe
            repudiandae velit. Dolores quam nesciunt quos quia possimus repellat
            veniam doloribus quod perferendis cumque asperiores itaque pariatur
            aliquid accusamus ipsam fugiat assumenda, incidunt enim illo
            molestiae necessitatibus odit! Tempore beatae, ea ut eum consequatur
            velit asperiores optio quibusdam amet quidem non! Cupiditate
            dignissimos, commodi eligendi soluta quisquam sit necessitatibus
            nihil quidem quibusdam nemo quas provident illum placeat possimus
            dolor, consequatur quia eos odit eius inventore, similique maiores
            animi dolorem? Autem ipsa perferendis deleniti quis eius? Nemo
            dolorum accusantium optio eligendi fugit! Nihil assumenda velit quod
            enim repellat iusto sed. Quibusdam modi magnam, quae excepturi
            dolorum vitae quisquam nisi culpa rerum.
          </p>
        </div>
      </div>
      <Divider className='md:hidden' />

      <div className='grid auto-rows-min gap-12 sm:grid-cols-2 sm:gap-8 md:max-w-xs md:grid-cols-1'>
        <h3 className='col-span-full h-fit font-bold text-emerald-700 md:col-span-full'>
          Postingan Terbaru Lainya
        </h3>
        <PostCard />
        <div className='group relative rounded-lg border-[1px] border-slate-300 sm:flex sm:flex-col sm:p-0'>
          <div className='absolute -top-7 hidden gap-2'>
            <Label
              title='Category'
              className=' h-fit bg-blue-100 text-blue-500 sm:block'
            />
            <Label
              title='Category'
              className=' h-fit bg-blue-100 text-blue-500 sm:block'
            />
          </div>
          <Link to='/'>
            <ImgFrame
              image={images.dayung}
              className='float-left mr-4 max-w-xs sm:max-w-none '
              imgClass='sm:rounded-b-none'
            />
            <div className='clear-right flex flex-col justify-between gap-2 sm:gap-4 sm:p-4'>
              <h4 className='line-clamp-2 font-bold group-hover:underline'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                velit.
              </h4>
              <div className='flex items-center gap-1 text-xs'>
                <Icon icon='mdi:clock-time-eight' />
                <p>21 December 2023, 10:33 WIB</p>
              </div>
              <p className='line-clamp-3 hidden'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                est labore temporibus dolore nostrum nemo rerum, beatae illo
                recusandae, qui doloribus neque sapiente ipsum officiis.
                Excepturi assumenda odio saepe? Explicabo soluta mollitia cum
                veritatis nulla cumque illo, repellendus, molestiae eos maxime
                deserunt officia recusandae? Nesciunt rerum atque ullam nihil
                laboriosam.
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className='grid auto-rows-min grid-cols-2 gap-4 md:max-w-xs md:grid-cols-1 md:p-4'>
        <h2 className='col-span-full h-fit font-bold text-emerald-700 md:col-span-full'>
          Postingan Terbaru Lainya
        </h2>
        <div className='flex h-fit w-full flex-col rounded-lg border-[1px] border-slate-300 hover:bg-slate-300'>
          <ImgFrame
            image={images.dayung}
            className=''
            imgClass='rounded-b-none'
          />
          <div className='flex flex-col justify-between gap-2 p-2'>
            <Label
              title='Category'
              className='bg-blue-100 text-blue-500 md:block'
            />
            <Link to='/'>
              <h4 className='line-clamp-2 font-bold hover:underline'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor.
              </h4>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Post
