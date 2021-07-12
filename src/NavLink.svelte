<script>
  import { Link } from 'svelte-routing';

  export let to = '';
  export let className = '';

  const getProps = ({ href, isPartiallyCurrent, isCurrent }) => {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    const result = { class: className };

    if (isActive) {
      result.class = className.concat(' ', 'active');
    }

    return result;
  }
</script>

<Link to="{to}" getProps="{getProps}">
    <slot />
</Link>
