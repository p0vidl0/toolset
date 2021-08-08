<script lang="ts">
  import { getWeek } from 'date-fns';

  const now = new Date();
  const getWeekNumber = () => getWeek(now);

</script>

<div class="w-full">
    <h1>Date</h1>
    <p>Date utils</p>
    <div>
        Now: {now.toISOString()}
    </div>
    <div>
        Week number: {getWeekNumber()}
    </div>
</div>

<style>
</style>
