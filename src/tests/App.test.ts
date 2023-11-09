import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';


// export function sum(a, b) {
//   return a + b
// }

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

it('DataContext works properly', (ctx) => {
  console.log(ctx.task.name)
})



