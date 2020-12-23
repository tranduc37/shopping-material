import { ListItem, List, Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className="row col">
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>

      <List>
        
        <ListItem>
        12345
        </ListItem>
        <ListItem>
        12345
        </ListItem>
      </List>
    </div>
  )
}

export default Footer
