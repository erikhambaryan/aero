// import { Button } from '../components/common/Button';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export function Contact() {
//   return (
//     // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//     //   <div className="text-center mb-16">
//     //     <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//     //     <p className="text-xl text-gray-600">Get in touch with our team for any inquiries or assistance.</p>
//     //   </div>

//       <div className="grid md:grid-cols-2 gap-16">
//         {/* Contact Details */}
//         <div className="space-y-8">
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//             <div className="space-y-4">
//               {[
//                 { icon: Phone, text: '+374 10 30 80 01' },
//                 { icon: Mail, text: 'info@aviamed.am' },
//                 // { icon: MapPin, text: 'ք․ Երևան, «Զվարթնոց  միջ․ օդ․, 0042' },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <item.icon className="w-5 h-5 text-blue-600" />
//                   <span>{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
//             <p className="text-gray-600">
//               Երկուշաբթի - Ուրբաթ: 9:00 - 18:00<br />
//               Շաբաթ: 10:00 - 14:00<br />
//               Sunday: Closed
//             </p>
//             <p className="mt-4 text-gray-600">
//               24/7 Emergency Support Available
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               id="message"
//               rows={4}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             ></textarea>
//           </div>
//           <Button type="submit">Send Message</Button>
//         </form>
//       </div>

//       {/* Footer Section: Website created by */}
//       <div className="mt-16 border-t pt-8 flex items-center justify-center">
//         <p className="text-gray-600 text-sm mr-2">Website created by</p>
//         <a
//           href="https://www.instagram.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2"
//         >
//           <img
//             src="/dist/logo.png"
//             alt="Instagram Logo"
//             className="h-8 w-auto"
//           />
//           <span className="text-blue-600 font-medium">AviaMed</span>
//         </a>
//       </div>
//     </div>
//   );
// }