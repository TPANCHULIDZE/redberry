import { useDispatch, useSelector } from "react-redux"
import { setDeleteKnowledge, setKnowledge } from "../../store/knowledge/knowledge.actions";
import { selectKnowledges } from "../../store/knowledge/knowledge.select"
import './styles/addKnowledge.style.css'
const defaultKnowledge = {
  uni: '',
  degree: '',
  endDate: '',
  description: ''
}

export const AddKnowledge = () => {
  const knowledges = useSelector(selectKnowledges);
  const dispatch = useDispatch();
  const index = Object.keys(knowledges).length;

  const addMoreKnowledge = () => {
    dispatch(setDeleteKnowledge())
    dispatch(setKnowledge({index, value: defaultKnowledge}))
  }

  return (
    <div id="button">
      <button onClick={addMoreKnowledge} id="add-knowledge">სხვა სასწავლებლის დამატება</button>
    </div>
  )
}