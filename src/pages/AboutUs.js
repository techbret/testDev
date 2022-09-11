import Jon from '../resources/images/jon.jpg'
import Steve from '../resources/images/steve.jpg'
import Adam from '../resources/images/adam.jpg'

const people = [
    {
      name: 'Jon Ashton, Ph.D',
      role: 'Chief Executive Officer',
      imageUrl: Jon,
      bio: 'Dr. Ashton is a respected Doctor of Psychology with a treatment focus on highly complex cases.  He finds great fulfillment treating patients in his private practice.  As CEO at Strata Intel, he guides all aspects of operations and assures the vision and mission are carried out',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Steve Thorne',
        role: 'Chief Technology Officer',
        imageUrl: Steve,
        bio: 'Steve is an experienced software developer and software development manager, having filled development roles at multiple Fortune 100 companies.  As CTO at Strata Intel, Steve is responsible for the software development team and product development process.',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Adam Levanger',
        role: 'President',
        imageUrl: Adam,
        bio: 'Adam brings a diverse background in start-up and high growth ventures to Strata Intel.  As President at Strata Intel, Adam oversees customer experience, sales and marketing, business development, and professional services.',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
    // More people...
  ]




  
  export default function AboutUs() {

    return (
      <div className="bg-zinc-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="text-lg text-zinc-800">
              The mission of Strata Intel is to support and promote well-being through the development of science-backed software solutions.  Its current focus is supporting the mental health of health-care industry employees.  
              </p>
              <p className="text-xl text-gray-500">
              Strata Intel’s <span className='font-bold'>Group Well-Being Assessment (GWA)</span>, is a powerful application that provides management intelligence related to employee well-being and correlates with a psychometric data set comprised of 20 years of real-world, clinical data.  GWA is a simple-to-use tool for the assessment of a group of individuals, providing managers with reliable results of group well-being.  
              </p>
              <p className="text-xl text-gray-500">
              Strata Intel was founded as a consequence of witnessing the ravages of stress and trauma on healthcare workers individually, as well as the associated financial impacts on businesses.  Prior to the work of Strata Intel, managers were unable to understand the well-being status of employees as a group, so they were limited in how to respond and support.  Strata Intel’s goal is to change that dynamic and provide managers with intelligence they can use to effectively and efficiently support employee well-being.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-blue-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
  
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  