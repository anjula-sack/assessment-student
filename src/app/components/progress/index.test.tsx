import React from 'react'
import { render } from '@testing-library/react'
import Progress from './index'

describe('Progress component', () => {
  it('renders correct filled width and dots', () => {
    const { container } = render(<Progress current={1} total={4} />)
    // Filled portion should have bg-yellow-500 and correct width
    const filled = container.getElementsByClassName('bg-yellow-500')
    expect(filled).toHaveLength(1)
    const filledDiv = filled[0]
    expect(filledDiv).toHaveStyle('width: 50%')
    // Active dot has border-red-400
    const activeDots = container.getElementsByClassName('border-red-400')
    expect(activeDots).toHaveLength(1)
    // Inactive dots have bg-red-300
    const inactiveDots = container.getElementsByClassName('bg-red-300')
    expect(inactiveDots).toHaveLength(3)
  })
})
