import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import StyleAbout from './Aboutus.module.css'
import btnBack from '../../assets/images/left-arrow.png'

const Aboutus = () => {

  useEffect(() => {
    document.title = "نبذة عنا - Concrete "
  }, [])

  return (
    <>
      <div className={`p-5 ${StyleAbout.AboutContanier} d-flex justify-content-center `} >
        <div className={`container`}>
          <Link to='/home' className={`${StyleAbout.link}`} ><button className={`border-0 bg-transparent  `}><img src={btnBack} className={`${StyleAbout.backBtn}`} alt="back-btn" /></button></Link>

          <div className={`text-center mt-5 fw-bold`}>
            <h1 className={`fw-bold ${StyleAbout.heading}`} ><span className={`text-danger`}>Concrete</span> للمقاولات</h1>
            <p className={`fs-4`}>نبني بثقة<span className={`text-danger`}>…</span> نحو غدٍ متطور</p>
          </div>



          <div className={`card  my-5 p-3  shadow ${StyleAbout.cardwidth}`}>
            <div className={`card-body`}>
              <h4 className={`card-title fw-bolder text-danger`}>من نحن</h4>
              <p className={`card-text  `}> شركة متخصصة في تنفيذ وإدارة المشاريع الإنشائية بمختلف أنواعها، تشمل المشاريع السكنية، التجارية، الصناعية، والحكومية. نعمل برؤية مستقبلية واضحة، هدفنا تقديم خدمات بناء بمعايير عالمية، وخلق حلول هندسية تواكب تطلعات التطوير العمراني في المملكة والمنطقة.</p>

            </div>
          </div>


          <div className={`card  my-5 p-3  shadow ${StyleAbout.cardwidth}`}>
            <div className={`card-body`}>
              <h4 className={`card-title fw-bolder text-danger `}>رؤيتنا</h4>
              <p className={`card-text  `}> أن نكون شريك البناء الأول في مشاريع التنمية، والمساهم الأبرز في تطوير بنية تحتية حديثة تدعم طموحات المجتمعات واحتياجات الأجيال القادمة. </p>

            </div>
          </div>

          <div className={`card  my-5 p-3  shadow ${StyleAbout.cardwidth}`}>
            <div className={`card-body`}>
              <h4 className={`card-title fw-bolder text-danger`}>رسالتنا</h4>
              <p className={`card-text  `}>تقديم خدمات مقاولات شاملة ومتكاملة تتميز بالجودة والدقة والابتكار، ضمن أطر زمنية واضحة وتكلفة مدروسة، وبما يضمن رضا عملائنا وتجاوز توقعاتهم.
              </p>
            </div>
          </div>

          <div className={`card  my-5 p-3 shadow  ${StyleAbout.cardwidth}`}>
            <div className={`card-body`}>
              <h4 className={`card-title fw-bolder text-danger`}>نطاق خدماتنا</h4>
              <h6 className={` fs-5 fw-semibold `}>نغطي جميع أنواع المشاريع، ومنها</h6>
              <p className={`card-text `}>

                <ul className={`${StyleAbout.listData}`} >
                  <li >المشاريع السكنية : فلل، مجمعات، بنايات سكنية</li>
                  <li>المشاريع التجارية :  أسواق، مولات، مراكز أعمال </li>
                  <li>المشاريع  الصناعية : مصانع، مستودعات، منشآت لوجستية</li>
                  <li>المشاريع الحكومية :  مدارس، مرافق عامة، مراكز صحية</li>
                  <li>المشاريع التحتية :  طرق، شبكات مياه وصرف، إنارة</li>
                  <li>أعمال الترميم والتطوير العقاري</li>
                </ul>


              </p>
            </div>
          </div>
          <div className={`card  my-5 p-3 shadow  ${StyleAbout.cardwidth}`}>
            <div className={`card-body`}>
              <h4 className={`card-title fw-bolder text-danger `}> قيمنا</h4>

              <p className={`card-text `}>

                <ul className={`${StyleAbout.listData}`}>
                  <li>الالتزام الكامل بمعايير الجودة والسلامة</li>

                  <li>الشفافية في جميع مراحل المشروع</li>

                  <li>التطوير المستمر والتقنيات الحديثة</li>

                  <li>الاحترافية في التنفيذ والإدارة </li>

                  <li>تحقيق رضا العميل كشريك في النجاح </li>

                </ul>


              </p>
            </div>
          </div>


          <div className={`card  my-5 p-3 mx-auto text-center shadow ${StyleAbout.cardwidth}`}>
            <div className={`card-body`}>
              <h4 className={`card-title fw-bolder text-danger `}>لماذا نحن؟</h4>

              <p className={`card-text  fw-bold`}>لأننا لا نكتفي بالبناء فقط، بل نرسم مستقبلًا مستدامًا يعتمد على التخطيط الذكي والتنفيذ المتقن
              </p>
            </div>
          </div>

        </div>
      </div>



    </>
  )
}

export default Aboutus