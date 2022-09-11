import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Icon from '../resources/images/assesment-laptop.svg';

const features = [
    {
      name: 'Regular Group Assessment',
      description: 'Assessment taken by a sample of employees each month for up-to-date information and ability to analyze trends',
    },
    { name: 'Actionable Intelligence', description: 'Easy-to-understand monthly and quarterly reports and metrics guide management to take proactive steps to support employee well-being.' },
    {
      name: 'Science Based',
      description: 'Results correlate with a 20 year data set of clinical, real-world data, indicating scientific measures of general group well-being and work performance risks.',
    },
    { name: ' Simple to Manage', description: 'Streamlined process for management and employees to minimize work disruption and maximize value added.  Full support and training from Strata Intel.' },
    { name: 'Confidential', description: 'Assessments and reports are group based with no links to individual employees and the data they submit.  ' }
  ]
  

export default function Home() {
  return (
    <div>
      <div className="pt-10 bg-blue-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <a href="/"
                  className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full">
                    We're beta testing
                  </span>
                  <span className="ml-4 text-sm">Sign up to be considered</span>
                  <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
                  <span className="block">Support</span>
                  <span className="block text-blue-400">employee well-being</span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Strata Intel’s Group Well Being Assessment empowers skilled nursing facility managers to better support employee well-being, leading to lower turnover, a reduction in clinical errors, improved patient care, more financial stability, and compliance with upcoming government regulations.
                </p>
                <div className="mt-10 sm:mt-12">
                  
                    <div className="sm:flex">
                      <div className="mt-3 sm:mt-0 ">
                        <button
                          type="submit"
                          className="block w-full py-3 px-4 rounded-md shadow bg-zinc-50 text-blue-900 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                        >
                          Request a Demo/Consultation
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">

                        <button
                          type="submit"
                          className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      Our current market focus is Skilled Nursing Facilities.  If you are in another market segment or industry, let us know of your interest and we will add you to a list to be notified as we expand. {' '}
                    </p>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-blue-900 uppercase tracking-wide">Strata Intel's</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Group Well-being Assessment</p>
            <p className="mt-4 text-lg text-gray-500">
            A revolutionary tool that provides managers with easy-to-unders intelligence regarding the well-being of employees as a group
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                    <p className="ml-9 text-lg leading-6 font-semibold text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-blue-800">
        <div className="max-w-6xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">It's time to find solutions to the health care worker</span>
            <span className="block">mental health crisis</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
          They entered the industry to help others in their time of need.  Now they are in need.  Health Care workers are expected to deal with trauma and stress one day and then bounce back and do it again.  And again.  Stress.  Anxiety.  PTSD.  Depression.  Suicide.  We can and must do better.  Join Strata Intel in being part of the solution
          </p>
          <a
            href="/"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-blue-900 bg-zinc-50 hover:bg-blue-50 sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Employee well-being impacts financial stability and patient care
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Turnover.  Temporary staffing.  Training new staff.  Lack of team chemistry with new hires.  Understaffed scheduling issues.  Overtime.  Clinical errors due to fatigue and lack of emotional well-being.  The list goes on.  Financial stability is essential in providing the best care in a Skilled Nursing Facility.  Strata Intel can help.
            </p>
            <a
            href="/"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-800 hover:bg-blue-500 sm:w-auto"
          >
            Request Demo/Consultation
          </a>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-zinc-50 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-zinc-50 shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">turnover and clinical errors</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">Reduce</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">patient care and financial stability</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">Imporove</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">government regulations</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">Compliant</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}
