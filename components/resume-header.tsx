import PageHeader from './page-header';
import Tabs from './tabs';

export default function ResumeHeader() {
    return (
        <>
            <PageHeader>Resume</PageHeader>
            <div className="sticky top-0 bg-cool-gray-50 z-10">
                <Tabs>
                    <Tabs.Link href="/resume/personal">Personal</Tabs.Link>
                    <Tabs.Link href="/resume/education">Education</Tabs.Link>
                    <Tabs.Link href="/resume/professional-experience">
                        Experience
                    </Tabs.Link>
                    <Tabs.Link href="/resume/skills">Skills</Tabs.Link>
                </Tabs>
            </div>
        </>
    );
}
