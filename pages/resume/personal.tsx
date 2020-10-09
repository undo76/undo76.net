import Layout from '../../components/layout';
import ResumeHeader from '../../components/resume-header';

export default function PersonalPage() {
    return (
        <Layout>
            <article>
                <ResumeHeader />
                <div className="mt-8 prose prose-sm md:prose">
                    Personal data <i>(To do)</i>
                </div>
            </article>
        </Layout>
    );
}
