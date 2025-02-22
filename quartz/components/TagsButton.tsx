import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function TagsButton(_props: QuartzComponentProps) {
        return <a href="/tags">Browse Tags</a>
    }

    return TagsButton
}) satisfies QuartzComponentConstructor