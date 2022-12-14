import "./index.css"

//Sur ce composant, props.children correspond au contenu passé par le parent, il s'agit du {tag} de <Tag key={index}>{tag}</Tag>
const Tag = (props) => {
  return <div className="tag">{props.children}</div>
}

export default Tag
