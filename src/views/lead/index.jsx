const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
import css from "./lead.scss";

registerBlockType(`custom-block/lead`, {
    title: `custom-block - lead text`,
    category: "layout",
    attributes: {
        content: {
            type: "array",
            source: "children",
            selector: `.${css.lead}`,
        },
    },
    edit: (props) => {
        const { attributes: { content }, setAttributes } = props;
        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };
        return (
            <RichText
                tagName="p"
                className={css.lead}
                onChange={onChangeContent}
                value={content}
            />
        );
    },
    save: (props) => {
        return <RichText.Content className={css.lead} tagName="p" value={props.attributes.content} />;
    },
});
