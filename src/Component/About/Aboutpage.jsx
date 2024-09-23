import React,{useEffect} from 'react'
import './Aboutpage.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Aboutpage = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
        AOS.refresh(); // Refresh AOS animations after rendering
      }, []);


    return (
        <>
       


            <div className='about_us' >
                {/* First row */}
                <div className='aboutUs_outr'>


                </div>
            </div>
            {/* Vision */}
            <div className='about_us_vsn'>
                <span className='about_us_vsn_txt_outr'>
                    <span className='about_us_vsn_txt' >Our Mission</span>
                </span>
                <div>
                    <h1></h1>
                    <div className='about_us_vsn_grpic' >
                        <span className='about_us_vsn_grpic_left' data-aos="flip-left">
                            <img className='about_us_vsn_img' src="https://imageio.forbes.com/specials-images/imageserve/64e90445ce261a70084af6c1/Business-team-high-fives--aligning-with-their-mission-of-teamwork-/960x0.jpg?format=jpg&width=960" alt="bhole baba" />
                        </span>
                        <span className='about_us_vsn_grpic_right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis, reiciendis officiis delectus in ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet perferendis nemo sint deserunt, explicabo doloribus sunt unde provident, modi accusantium mollitia, quasi ab nihil laborum. Vitae, quasi. In vero quasi maxime, modi repudiandae consequatur.</span>
                    </div>
                </div>

            </div>
            {/* Mission */}
            <div className='about_us_vsn'>
                <span className='about_us_vsn_txt_outr'>
                    <span className='about_us_vsn_txt' >Our Vission</span>
                </span>
               

                <div className='about_us_vsn_grpic_rev' >
                    <span className='about_us_vsn_grpic_right' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, id nam eum quia quo perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quidem consequatur ullam tenetur ipsa a rerum quis officiis, dolorem, illo, amet recusandae. Dolore tempora minus impedit, obcaecati deserunt ea eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe.
                    </span>
                    <span className='about_us_vsn_grpic_left' data-aos="flip-left">
                        <img className='about_us_vsn_img' src="https://www.iaam.se/img/Our%20Vision%20&%20Mission/Pic%201%20-%20640%20X%20426px%20Vision.jpg" alt="bhole baba" />
                    </span>
                </div>
            </div>

            {/* Our Aim */}
            <div className='about_us_vsn'>
                <span className='about_us_vsn_txt_outr'>
                    <span className='about_us_vsn_txt' >Our Goal </span>
                </span>
                <div>
                    <h1></h1>
                    

                    <div className='about_us_vsn_grpic' >
                        <span className='about_us_vsn_grpic_left' data-aos="flip-left">
                            <img className='about_us_vsn_img' src="https://evacenteno.com/wp-content/uploads/2018/04/Goal.jpg" alt="bhole baba" />
                        </span>
                        <span className='about_us_vsn_grpic_right' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis, reiciendis officiis delectus in ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quae laboriosam inventore ratione ex vero omnis deserunt sit dolores at tempora non, aliquid assumenda, ea temporibus excepturi, eaque eum optio.</span>
                    </div>
                </div>

            </div>
            {/* who are we */}
            <div className='about_us_vsn'>
                <span className='about_us_vsn_txt_outr'>
                    <span className='about_us_vsn_txt' >Company Profile</span>
                </span>
                <div className='about_us_vsn_grpic_rev' >
                    <span className='about_us_vsn_grpic_right' >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero perferendis eveniet illum accusantium repudiandae odit aspernatur ducimus veritatis consequuntur cupiditate aut asperiores, praesentium unde eos sed exercitationem tenetur est hic voluptatibus officiis. Natus quibusdam quaerat reiciendis odit corrupti, nihil debitis!
                    </span>
                    <span className='about_us_vsn_grpic_left' data-aos="flip-left">
                        <img className='about_us_vsn_img' src="https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg" alt="bhole baba" />
                    </span>
                </div>
            </div>







        
        </>
    )
}

export default Aboutpage