<template>
    <video autoplay muted loop class="fixed -z-50 right-0 bottom-0 min-w-full min-h-full brightness-75">
        <source src="/background.mp4" type="video/mp4">
    </video>
    <div class="w-full flex justify-center items-center pt-8">
        <div class="w-[1000px] flex flex-col gap-8 items-center">
            <div class="flex justify-center items-center gap-8 bg-[rgba(0,0,0,0.05)] shadow-inner rounded-3xl">
                <img class="w-60 h-60" src="/me-drawn.png" alt="me-drawn.png">
                <div class="flex flex-col justify-center gap-5">
                    <h1 class="text-5xl font-bold">Welcome <span class="text-3xl font-normal">to my info hub!</span></h1>
                    <p class="text-xl max-w-[800px]">
                        Here is a lobby like place for all my portfolio type websites and personal web!
                        You'll also find some links to projects I've done in the past and continue to develop...
                        and maybe some easter eggs I left here and there riddled across my corner of the internet :D
                    </p>
                </div>
            </div>
            <div class="w-full flex flex-col flex-wrap max-h-[1500px]">
                <door :icon="'🗃️'" :title="'Portfolio'" :location="'#'" :description="'My portfolio site is currently non-existent and I will soon make it'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'🍱'" :title="'Bentofolio'" :location="'https://bentofolio.zachl.tech'" :description="'My bento grid style portfolio - Not my official portfolio site though'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'💼'" :title="'Résumé (Site)'" :location="'https://resume.zachl.tech'" :description="'View my résumé in a nice, less professional, website format'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'📁'" :title="'Résumé (PDF)'" :location="'https://resume-pdf.zachl.tech'" :description="'View my résumé as a professional PDF'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'🔑'" :title="'SSHfolio (SSH)'" :location="'https://github.com/ZachLTech/sshfolio'" :description="'Minimally showing off all your unique talents through a publicly SSHable TUI interface written in Go'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'📚'" :title="'Blog'" :location="'https://blog.zachl.tech'" :description="'Read some of my stories, tutorials, and see my thought process while making projects here'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'🏎️'" :title="'AEV-Software'" :location="'https://github.com/YamanDevelopment/AEV-Software'" :description="'The Alset Solar Cybersedan Software is a comprehensive full-stack ecosystem developed for the FAUHS AEV solar car'" :tag="'Project'" :tagColor="'#947100'" /> 
                <door :icon="'💻'" :title="'Devfolify'" :location="'https://github.com/YamanDevelopment/Devfolify'" :description="'Giving you real world problems and a chance to solve it using code in your unique way. We\'re here to help you develop unique projects and real-world problem-solving skills.'" :tag="'WIP Project'" :tagColor="'#947100'" /> 
                <door :icon="'📅'" :title="'Schedulix'" :location="'https://github.com/YamanDevelopment/Schedulix'" :description="'A program that helps university students develop their course schedules for their upcoming semester.'" :tag="'WIP Project'" :tagColor="'#947100'" /> 
                <door :icon="'☕'" :title="'Network Chuck'" :location="'https://www.youtube.com/@NetworkChuck'" :description="'His tutorials and educational videos are so great and he was the reason I tried Linux for the first time'" :tag="'Youtuber'" :tagColor="'#FF0000'" /> 
                <door :icon="'️‍🔥'" :title="'Fireship'" :location="'https://www.youtube.com/@Fireship'" :description="'The entertainment & education combo in Fireships videos are simply unmatched and I tend to get a lot of my tech news from him now'" :tag="'Youtuber'" :tagColor="'#FF0000'" /> 
                <door :icon="'🍳'" :title="'Frying Pan'" :location="'https://www.youtube.com/@FryingPan'" :description="'Frying Pans skits and journey helped inspire me to continue in CS alongside attempting a startup'" :tag="'Youtuber'" :tagColor="'#FF0000'" /> 
                <door :icon="'🦉'" :title="'Raid Owl'" :location="'https://www.youtube.com/@RaidOwl'" :description="'Without RaidOwl, I probably would not have as secure of a homelab setup as I do now nor would I be using raid redundancy'" :tag="'Youtuber'" :tagColor="'#FF0000'" /> 
                <door :icon="'👩‍💻'" :title="'Matrix'" :location="'https://matrix.yamanon.top/'" :description="'Matrix protocol for use with my friends since other forms of communication are pretty unprivate'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'🎥'" :title="'Movie-Web'" :location="'https://movie-web.zachl.tech'" :description="'Movie-Web is a very convenient media streaming tool which I use all the time when watching The Office'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'📄'" :title="'Fileshare'" :location="'https://share.lopezhome.tech'" :description="'The convenience of having my own filesharing service is so nice'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'🔍'" :title="'SearXNG'" :location="'https://search.lopezhome.tech'" :description="'Why use Google or DuckDuckGo when you can use a combination of them all, AND keep your data private!!'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'🤠'" :title="'Thandi'" :location="'https://str1ke.codes'" :description="'A self-taught full-stack developer who I partner up with for various projects and Hackathons'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'😱'" :title="'Amarnath'" :location="'https://github.com/jeebuscrossaint'" :description="'Another close friend of mine who took up programming as he\'s, as he says, always found the science behind computers and computational intelligence very interesting'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'🤯'" :title="'Jossaya'" :location="'https://jcamille.tech/'" :description="'Jossaya is a great guy who\'s typically ready to jump head first into any coding project'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'😂'" :title="'Makai'" :location="'https://makaip.com'" :description="'A very enthusiastic friend who, as he says, enjoys coding, making stuff in Blender, playing the piano, and photography'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'😎'" :title="'Alex'" :location="'https://www.alexcastronovo.com/'" :description="'A research partner I have yet to properly befriend who has experience in many CS related fields'" :tag="'Friend'" :tagColor="'#276266'" /> 
            </div>
        </div>
    </div>
</template>