import Tabs from './tabs';

export default function ResumeTabs() {
    return (
        <Tabs>
            <Tabs.Link href="/resume/personal-data">Personal</Tabs.Link>
            <Tabs.Link href="/resume/education">Education</Tabs.Link>
            <Tabs.Link href="/resume/professional-experience">
                Experience
            </Tabs.Link>
            <Tabs.Link href="/resume/skills">Skills</Tabs.Link>
        </Tabs>
    );
}
