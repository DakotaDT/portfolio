"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title:  "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-5">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.Js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Express</li>
                <li>Sequelize</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:  "education",
        content: (
            <ul className="list-disc pl-5">
                <li>UNIVEM - Fundação Euripides Soares da Rocha</li>
                <li>Universidade de Marília, São Paulo - Brazil </li>
                <br />
                <li>Completed 4 of 8 semesters (Currently paused)</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-5">
                <li>Empity</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id)
    })
  }

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
                src="/images/desktop.png"
                width={700}
                height={700}
                style={{borderRadius: 15}}
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">I am a Full Stack web developer with a passion for creating solutions for my costumers. I Have
                    experience working with JavaScript, React, Node.Js, Express, MongoDB, MySQL, Sequelize, HTML, CSS
                    and Git. I am a quick learner and I am always looking to expando my knowlegde and skill set. I am a team player
                    and I am excited to work with others to create Amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
