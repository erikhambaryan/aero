import React from 'react';
import { BackgroundPattern } from '../components/common/BackgroundPattern';

export function OurServices() {
  const services = [
    'Թռչող և կարգավարական աձնակազմերի, բորտուղեկցորդների և ավիացիոն այլ մասնագետների ավիա բժշկական փորձաքննություն',
    'Վերգետնյա աշխատողների նախնական և պարբերական պարտադիր բուժզննություն',
    'Բժշկական խորհրդատվություն',
    'Թռչող անձնակազմերի, կարգավարների նախաթռիչքային/նախահերթափոխային բժշկական զննություն',
    'Օդանավակայանի աշխատողների և ուղևորների անհետաձգելի առաջին բժշկական օգնություն',
    'Սանիտարա-հիգիենիկ ծառայություններ',
    'Վերականգնողական կենտրոն /մարզասրահ, շոգեբաղնիք/',
  ];

  const specialists = [
    'ԱԲՓ (ավիաբժշկական փորձագետ)',
    'Թերապևտ',
    'Նյարդաբան',
    'Ակնաբույժ',
    'Քիթ-կոկորդ-ականջաբան',
    'Վիրաբույժ',
    'Մաշկաբան',
    'Հոգեբույժ',
    'Հոգեբան',
    'Սրտաբան',
  ];

  const instrumentalExams = [
    'ԷՍԳ',
    'ՈւՁՀ',
    'Աուդիոմետրիա',
    'R-գրաֆիա',
    'Վելոէրգոմետրիա',
    'Սպիրոմետրիա',
  ];

  const labExams = [
    'Կլինիկական',
    'Բակտերիոլոգիական',
    'Մանրէաբանական',
  ];

  return (
    <section id="our-services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h2>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gray-200 rounded-2xl">
              <BackgroundPattern />
            </div>
            <div className="relative p-8 md:p-12 prose prose-lg mx-auto text-gray-600">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-6">Ընկերությունը իրականացնում է հետևյալ ծառայությունները․</h3>
                <ol className="list-decimal pl-8 space-y-3 mb-12">
                  {services.map((service, index) => (
                    <li key={index} className="leading-relaxed">{service}</li>
                  ))}
                </ol>

                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-center">Խորհրդատվություն, հետազոտություն</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Նեղ մասնագետներ</h4>
                      <ul className="list-disc pl-8 space-y-2">
                        {specialists.map((specialist, index) => (
                          <li key={index}>{specialist}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Գործիքային հետազոտություններ</h4>
                      <ul className="list-disc pl-8 space-y-2">
                        {instrumentalExams.map((exam, index) => (
                          <li key={index}>{exam}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Լաբորատոր հետազոտություններ</h4>
                      <ul className="list-disc pl-8 space-y-2">
                        {labExams.map((exam, index) => (
                          <li key={index}>{exam}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}