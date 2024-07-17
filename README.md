#### import DrawerComponent in a page and wrap the content in the DrawerComponent

```jsx
import DrawerComponent from "../components/DrawerComponent";

export default function Dashboard() {
  return (
    <div>
      <DrawerComponent>
        <div>Dashboard</div>
      </DrawerComponent>
    </div>
  );
}
```
