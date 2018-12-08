import React, { Component } from 'react'
import CardList from '@/components/CardList';
import { fetchList } from "@/api";

export default class IndexList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetchList().then(({data})=>{
      this.setState({data})
    }).catch(e=>{
      console.log(e)
    })
  }


  render() {
    
    const { data } = this.state

    return (
      <div>
        {
          CardList(data)
        }
      </div>
    )
  }
}
